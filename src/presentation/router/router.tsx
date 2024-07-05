import { Navigate, createHashRouter } from "react-router-dom";
import { ContactoPage } from "../pages/ContactoPage";
import { LandingPage } from "../pages/LandingPage";
import { SitiosEnlace } from "../pages/SitiosEnlace";
import { NoticiasPage } from "../pages/NoticiasPage";
import { TramitesPage } from "../pages/TramitesPage";
import { TransparenciaPage } from "../pages/TransparenciaPage";
import AppLayout from "../layouts/AppLayout";
import { NosotrosPage } from "../pages/NosotrosPage";
import { NotaPage } from "../pages/NotaPage";

export const menuRoutes = [
  {
    title: "Home",
    path: "/",
    element: <LandingPage />,
  },
  {
    title: "Contacto",
    path: "/contacto",
    element: <ContactoPage />,
  },
  {
    title: "Noticias",
    path: "/noticias",
    element: <NoticiasPage />,
  },
  {
    title: "Sitios",
    path: "/sitios",
    element: <SitiosEnlace />,
  },
  {
    title: "Trámites",
    path: "/tramites",
    element: <TramitesPage />,
  },
  {
    title: "Transparencia",
    path: "/transparencia",
    element: <TransparenciaPage />,
  },
  {
    title: "Nosotros",
    path: "/nosotros",
    element: <NosotrosPage />,
  },
  {
    title: "Nota",
    path: "/noticias/:id",
    element: <NotaPage />,
  }
  
]

export const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        ...menuRoutes.map( route => ({
          path: route.path,
          element: route.element
        })),
        {
          path: '',
          element: <Navigate to={ menuRoutes[0].path } />
        }
  
      ],
      
    }
 
]);
