import {createBrowserRouter} from "react-router-dom" 
import Homescreen from "../page/Homescreen"


export const mainRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homescreen/>,
            

        }
    ]
)