import React from "react"
import App from "./App/App"
import { Routes, Route } from "react-router-dom"

const Comments = React.lazy(() => import("./Comment/Comments"))
export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<App />} />
            <Route path="comment" element={<Comments />} />
        </Routes>
    )
}
