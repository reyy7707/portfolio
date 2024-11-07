import { BrowserRouter } from "react-router-dom"
import { ErrorB } from "./providers/error"
import { RouterApp } from "./providers/router"
import { I18nextProvider } from "react-i18next"
import i18n from "@/shared/const/i18n"
import { ThemeProvider } from "@/widgets/theme/ui/theme"

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <ErrorB>
            <RouterApp />
          </ErrorB>
        </I18nextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
