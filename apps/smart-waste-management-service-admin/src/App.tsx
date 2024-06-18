import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdministratorList } from "./administrator/AdministratorList";
import { AdministratorCreate } from "./administrator/AdministratorCreate";
import { AdministratorEdit } from "./administrator/AdministratorEdit";
import { AdministratorShow } from "./administrator/AdministratorShow";
import { WasteCollectionScheduleList } from "./wasteCollectionSchedule/WasteCollectionScheduleList";
import { WasteCollectionScheduleCreate } from "./wasteCollectionSchedule/WasteCollectionScheduleCreate";
import { WasteCollectionScheduleEdit } from "./wasteCollectionSchedule/WasteCollectionScheduleEdit";
import { WasteCollectionScheduleShow } from "./wasteCollectionSchedule/WasteCollectionScheduleShow";
import { WasteCollectionServiceList } from "./wasteCollectionService/WasteCollectionServiceList";
import { WasteCollectionServiceCreate } from "./wasteCollectionService/WasteCollectionServiceCreate";
import { WasteCollectionServiceEdit } from "./wasteCollectionService/WasteCollectionServiceEdit";
import { WasteCollectionServiceShow } from "./wasteCollectionService/WasteCollectionServiceShow";
import { HouseholdUserList } from "./householdUser/HouseholdUserList";
import { HouseholdUserCreate } from "./householdUser/HouseholdUserCreate";
import { HouseholdUserEdit } from "./householdUser/HouseholdUserEdit";
import { HouseholdUserShow } from "./householdUser/HouseholdUserShow";
import { RecyclingTrackerList } from "./recyclingTracker/RecyclingTrackerList";
import { RecyclingTrackerCreate } from "./recyclingTracker/RecyclingTrackerCreate";
import { RecyclingTrackerEdit } from "./recyclingTracker/RecyclingTrackerEdit";
import { RecyclingTrackerShow } from "./recyclingTracker/RecyclingTrackerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Smart Waste Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Administrator"
          list={AdministratorList}
          edit={AdministratorEdit}
          create={AdministratorCreate}
          show={AdministratorShow}
        />
        <Resource
          name="WasteCollectionSchedule"
          list={WasteCollectionScheduleList}
          edit={WasteCollectionScheduleEdit}
          create={WasteCollectionScheduleCreate}
          show={WasteCollectionScheduleShow}
        />
        <Resource
          name="WasteCollectionService"
          list={WasteCollectionServiceList}
          edit={WasteCollectionServiceEdit}
          create={WasteCollectionServiceCreate}
          show={WasteCollectionServiceShow}
        />
        <Resource
          name="HouseholdUser"
          list={HouseholdUserList}
          edit={HouseholdUserEdit}
          create={HouseholdUserCreate}
          show={HouseholdUserShow}
        />
        <Resource
          name="RecyclingTracker"
          list={RecyclingTrackerList}
          edit={RecyclingTrackerEdit}
          create={RecyclingTrackerCreate}
          show={RecyclingTrackerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
