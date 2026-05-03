import { createHashRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./layout/Layout";
import {
  AboutUs,
  AllHouses,
  Comand,
  Contact,
  Details,
  FormRequest,
  Home,
  Ipoteka,
  IQClub,
  Kinstantinovka,
  MultiFloor,
  News,
  PutYourDetails,
  SilverVillage,
  SingleFloor,
  Townhouses,
  Usadi,
  WinterHill,
} from "./router/router";
import Loading from "./components/Loading/Loading";
import ErrorPage from "./components/ErrorPage/ErrorPage";

// 👉 простой fallback вместо белого экрана
<ErrorPage />

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />, 
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "silvervillage",
          element: (
            <Suspense fallback={<Loading />}>
              <SilverVillage />
            </Suspense>
          ),
        },
        {
          path: "iqclub",
          element: (
            <Suspense fallback={<Loading />}>
              <IQClub />
            </Suspense>
          ),
        },
        {
          path: "usadi",
          element: (
            <Suspense fallback={<Loading />}>
              <Usadi />
            </Suspense>
          ),
        },
        {
          path: "winterhill",
          element: (
            <Suspense fallback={<Loading />}>
              <WinterHill />
            </Suspense>
          ),
        },
        {
          path: "konstantinovka",
          element: (
            <Suspense fallback={<Loading />}>
              <Kinstantinovka />
            </Suspense>
          ),
        },
        {
          path: "ipoteka",
          element: (
            <Suspense fallback={<Loading />}>
              <Ipoteka />
            </Suspense>
          ),
        },
        {
          path: "singlefloor",
          element: (
            <Suspense fallback={<Loading />}>
              <SingleFloor />
            </Suspense>
          ),
        },
        {
          path: "multifloor",
          element: (
            <Suspense fallback={<Loading />}>
              <MultiFloor />
            </Suspense>
          ),
        },
        {
          path: "townhouse",
          element: (
            <Suspense fallback={<Loading />}>
              <Townhouses />
            </Suspense>
          ),
        },
        {
          path: "allhouses",
          element: (
            <Suspense fallback={<Loading />}>
              <AllHouses />
            </Suspense>
          ),
        },
        {
          path: "comand",
          element: (
            <Suspense fallback={<Loading />}>
              <Comand />
            </Suspense>
          ),
        },
        {
          path: "aboutUs",
          element: (
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "news",
          element: (
            <Suspense fallback={<Loading />}>
              <News />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "details/:todosId",
          element: (
            <Suspense fallback={<Loading />}>
              <Details />
            </Suspense>
          ),
        },
        {
          path: "putyourdetails",
          element: (
            <Suspense fallback={<Loading />}>
              <PutYourDetails />
            </Suspense>
          ),
        },
        {
          path: "formrequest",
          element: (
            <Suspense fallback={<Loading />}>
              <FormRequest />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
