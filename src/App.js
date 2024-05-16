import logo from "./logo.svg";
import "./App.css";
import { DatePicker } from "antd";
import Editor from "./screens/editor";
import Templates from "./screens/temps";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/editor",
		element: <Editor></Editor>,
	},
	{
		path: "/templates",
		element: <Templates></Templates>,
	},
	{
		path: "*",
		element: <Templates></Templates>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
