import NavHeader from "./components/NavHeader.components";
import Sidebar from "./components/Sidebar.components";
import Form from "./pages/form.pages";
import Profile from "./pages/profile.pages";


function App() {
  return (
    <div>
      <NavHeader />
      <Sidebar />
      <div class="content-body">
        <div class="container-fluid">
          <div class="row page-titles">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Form</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">Validation</a></li>
            </ol>
          </div>
          <Profile />
          {/* <Form /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
