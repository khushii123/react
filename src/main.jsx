/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/*import Homepage from './Homepage.jsx'
import ClassComp from "./day-1/Components/1.ClassComponent.jsx";*/
/*import StateWithCC from './day-2/1.statewithCC.jsx'
import TextView from './TextView.jsx'
import TextDemo from './TextDemo.jsx'
import Calcualtor from './day-2/2.Calculator.jsx'
import MyForm from './practice/MyForm.jsx'
import FormCC from './day-3/formCC.jsx'
import SubmitBtn from './practice/SubmitBtn.jsx'
import FCstate from './day-4/FCstate.jsx'
import FCCounter from './day-4/FCCounter.jsx'
import DyForm from './day-5/DyForm.jsx'
import Counter from './day-5/1.counter.jsx'
import ParentView from './day-6/ParentView.jsx'
import HomeView from './day-7/Product.layout/HomeView.layout.jsx'
import Parent from './Prop-Practice/Parent.jsx'
import ProductView from './day-8/Product.layout.jsx'*/
{/*
import ListRender from './day-9/List.jsx'
import ListRenderAdd from './day-9/List-Add.jsx'
import ColorList from './day-9/Color-List.jsx'
import ParentCompSample from './day-10/1.Parent-comp.jsx'
import EmojisParent from './day-10/Emoji/1.ParentEmoji.jsx'
import ProductList from './day-12/Useeffect.jsx'
import InputBox from './day-11/Inutbox.jsx'
import ConditionalRenderingV1 from './day-11/Conditional-rendering.jsx'
import ProductListUI from './day-12/Componend-based/ProductListUI.jsx'
import UseEffectExample from './day-13/1.useeffect.jsx'
import ParentUseEffect from './day-13/Parenruseeffect.jsx'
import Parent from './day-19/Parent.jsx'
import Products from './practice/Products.jsx'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from './react-routing/About.jsx'
import Contact from './react-routing/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TextDemo/>

 <MyForm/>
    <FormCC/>
    <SubmitBtn/>
    <FCstate/>
  <FCCounter/>
  <DyForm/>
  <Counter/>
<ParentView/>
<HomeView/>
<Parent/>
<ProductView/>
<ListRender/>
<ListRenderAdd/>
<ColorList/>
<ParentCompSample/>
<EmojisParent/>
<ConditionalRenderingV1/>
<InputBox/>
<ProductList/>
<ProductListUI/>
<UseEffectExample/>
<ParentUseEffect/>
<Parent/>
<Products/>
  </React.StrictMode>,
)
*/}
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import "./index.css";
// import { Syntax } from "./Syntax";
// import { State1 } from "./State1";
// import StatePractice from "./StatePractice";
// import WithoutUseState from "./useState/WithoutUseState";
// import UsingUseState from "./useState/UsingUseState";
// import UseEffect from "./useEffect/UseEffect";
// import UseEffect1 from "./useEffect/UseEffect1";
// import UseEffect2 from "./useEffect/useEffect2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
import About from "./react-routing/About";
import Contact from "./react-routing/Contact";
import MyProducts from "./url routing/Myproducts";
import ProductDetails from "./url routing/Product detail";
  import WithUseRef from "./Useref/UseRefTask";
import App from "./OTP Task/App";
// import Home from "./react-routing/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/",
      element: <WithUseRef />,
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <Syntax /> */}
    {/* <State1 /> */}
    {/* <StatePractice />
    <WithoutUseState />
    <UsingUseState />
    <UseEffect />
    <UseEffect1 />
    <UseEffect2 /> */}
    <RouterProvider router={router} />
  </>
);