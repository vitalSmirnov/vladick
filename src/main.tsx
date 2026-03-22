import { createRoot } from "react-dom/client"
import App from "./app/App.tsx"
import "shared/lib/styles/index.css"
import "shared/lib/utils/i18n.ts"

createRoot(document.getElementById("root")!).render(<App />)
