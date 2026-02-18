import React from "react"
import './i18n';
import App from "./App/App"
import { Routes, Route } from "react-router-dom"
import './i18n';
const Comments = React.lazy(() => import("./Comment/Comments"))
export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<App />} />
            <Route path="comment" element={<Comments />} />
        </Routes>
    )
}
