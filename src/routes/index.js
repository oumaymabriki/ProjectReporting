import { AnonymLayout } from "../layouts/AnonymLayout";
import { ConnectedLayout } from "../layouts/ConnectedLayout";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { generateRoutes } from "./generate-routes";
import Admin from "../AdminInterface/Admin";
import Visitor from "../pages/Visitor";

export const routes = [
    {
        layout: AnonymLayout,
        routes: [
            {
                title: "Create an account",
                component: SignUp,
                isPublic: true,
                path: '/sign-up'
            },
            {
                title: "Verified your data",
                component: SignIn,
                isPublic: true,
                path: '/sign-in'
            }
        ]
    },
    {
        layout: AdminLayout,
        routes:[
            {
               title:" Acces Admin",
               component: Admin,
               path:'/admin',
               isPublic: false
            }
        ]
    },
    {
        layout: UserLayout,
        routes:[
            {
               title:"Acces User ",
               component:Visitor,
               path:'/visitor',
               isPublic: false
            }
      ]
    }
];

export const Routes = generateRoutes(routes);