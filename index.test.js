import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'

// Läser in allt kodinnehåll från index.html till denna variabel, som en sträng
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Lagrar DOM objektet som skapas före varje test
let dom;
// Genväg till dom.window.document.body
let body;

// Tar bort alla imports och exports från en sträng med kod
// Denna funktion behöver inte förstås - kopiera den vid behov.
function removeImports(code) {
    if (typeof code !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Regular expressions for different import patterns
    const importPatterns = [
        // Standard imports
        /^\s*import\s+(?:[^\n;]+?\s+from\s+)?['"][^'"]+['"][;\n]/gm,

        // Named imports
        /^\s*import\s*{[^}]+}\s+from\s+['"][^'"]+['"][;\n]/gm,

        // Default and named imports
        /^\s*import\s+[^,]+,\s*{[^}]+}\s+from\s+['"][^'"]+['"][;\n]/gm,

        // Dynamic imports
        /^\s*import\s*\([^)]+\)[;\n]/gm,

        // Side effect imports
        /^\s*import\s+['"][^'"]+['"][;\n]/gm
    ];

    let cleanedCode = code;

    // Apply each pattern
    importPatterns.forEach(pattern => {
        cleanedCode = cleanedCode.replaceAll(pattern, '');
    });

    cleanedCode = cleanedCode.replaceAll("export ", "")

    return cleanedCode;
}

// Ladda in skript manuellt på grund av problem med Jest och jsdom.
function loadScripts(names) {
    for (let scriptName of names) {
        const scriptContent = fs.readFileSync(path.resolve(__dirname, scriptName), 'utf8');
        const script = dom.window.document.createElement('script');
        // Lägg in kodinnehållet men ta bort alla imports och exports
        // eftersom endast moduler kan ha dem.
        script.textContent = removeImports(scriptContent)
        dom.window.document.body.appendChild(script);
    }
}

// Gruppera tester
describe('index.html', () => {
    // Ladda in HTML för varje test
    beforeEach(async () => {
        dom = new JSDOM(html, {
            // Kör alla skript som finns i HTMLen
            runScripts: 'dangerously',
            resources: "usable",
            pretendToBeVisual: true,
            contentType: "text/html",
        });

        // Vänta på att innehållet i HTML filen har laddat in (alla element)
        await new Promise(resolve => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });

        // Add any required browser APIs
        global.window = dom.window;
        global.document = dom.window.document;
        global.HTMLElement = dom.window.HTMLElement;

        body = dom.window.document.body;
    });

    // Definiera ett test med 'it'
    it('renders a heading element', () => {
        // Assert något, som att det finns en titel på sidan
        expect(body.querySelector('h1')).not.toBeNull()
    })

    it('adds to basket', () => {
        let items = {};

        // fetch och localStorage finns inte i jsdom
        // Vi kan skapa våra egna "fake" versioner genom att definiera
        // egna globala variabler
        // Här definieras vår egen simpla localStorage implementation
        // som agerar som den riktiga localStorage
        // Object.defineProperty(dom.window, 'localStorage') är ungefär samma som att skriva dom.window.localStorage = 
        Object.defineProperty(dom.window, 'localStorage', {
            value: {
                setItem: (key, value) => items[key] = value,
                getItem: (key) => {
                    if (items[key] === undefined) {
                        return null;
                    }

                    return items[key];
                },
                clear: () => items = {},
            },
            writable: true
        });

        loadScripts([
            "./js/models/basket.js",
            "./js/models/product.js",
            "./js/components/basket.js",
        ]);

        dom.window.addProductToBasket({ id: 4 });

        expect(dom.window.localStorage.getItem("basket")).not.toBeNull();
    });

    // Testar om "getProducts" API-funktionen fungerar
    // Vi sätter async så att vi kan använda await
    it('fetches products', async () => {
        // fetch och localStorage finns inte i jsdom
        // Vi kan skapa våra egna "fake" versioner genom att definiera
        // egna globala variabler
        // Denna fetch returnerar { products: [ { id:1 } ] } alltid, för att simulera DummyJson API:et
        dom.window.fetch = (url, options) => Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve({ products: [{ id: 1 }] })
        });

        // Om man vill kan man använda den riktiga fetch funktionen genom att skriva följande
        // Den sätter då den globala fetchen till "test" fetchen som fungerar som vanligt
        // dom.window.fetch = fetch;

        loadScripts([
            "./js/api/product.js",
        ]);

        const products = await dom.window.getProducts();

        expect(products.length).toBe(1);
    });
});
