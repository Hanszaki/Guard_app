import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Header from "./Body/Header";
import Dashboard from "./Body/Dashboard";
import PatroliList from "./components/PatroliList";
import AddPatroli from "./components/AddPatroli";
import Sevenbox from "./Body/sevenBox";
import GuestView from "./components/GuestView";
import EditPatroli from "./components/EditPatroli";
import Footer from "./Body/footer";
import LapdiView from "./components/LabdiView";
import LapdiForm from "./components/lapdiForm";
import MutasiView from "./components/mutasiView";
import BAPList from "./components/BAPList";
import Darurat from "./components/darurat/darurat";
import ExpedisiView from "./components/ExpedisiView";
import AssetView from "./components/AssetView";
import AddDarurat from "./components/darurat/addDarurat";
import InOutViews from "./components/inOutView";
import "./App.css";
import { useState } from "react";
import Sidebar from "./Body/Sidebar";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <>

              <Header OpenSidebar={OpenSidebar}/>
              <Dashboard />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
              <Sevenbox />
            </>
          </Route>

          <Route path="/patroli">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <PatroliList />
            </>
          </Route>
          <Route path="/inout">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

            <InOutViews/>
            </>
          </Route>

          <Route path="/tamu">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 
            <GuestView />
            </>
          </Route>
          <Route path="/lapdi">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <LapdiView />
            </>
          </Route>

          <Route path="patroli/add">
            <AddPatroli />
          </Route>
          <Route path="edit/:id">
            <EditPatroli />
          </Route>

          <Route path="/mutasi">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <MutasiView />
            </>
          </Route>
          <Route path="/bap">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <BAPList />
            </>
          </Route>
          <Route path="/addDarurat">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <AddDarurat />
            </>
          </Route>
          <Route path="/darurat">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <Darurat />
            </>
          </Route>
          <Route path="/ekspedisi">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <ExpedisiView />
            </>
          </Route>
          <Route path="/inout">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <InOutViews />
            </>
          </Route>
          <Route path="/asset">
            <>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

              <AssetView />
            </>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;