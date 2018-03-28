// in src/App.js
import React from 'react';
import {Admin, Resource, Delete, jsonServerRestClient} from 'admin-on-rest';
import {CandidatCreate, CandidatEdit, CandidatList} from "./components/candidats";
import authClient from "./server/authClient";
import {SERVER_BACK} from "./server";
import {EntrepriseCreate, EntrepriseEdit, EntrepriseList} from "./components/entreprises";
import {InformationCreate, InformationEdit, InformationList} from "./components/infomations";
import {OffreCreate, OffreEdit, OffreList} from "./components/offres";

const myTheme = {
    palette: {
        primary1Color: '#22a39f'
    },
    appBar: {
        color: '#22a39f'
    }
};

const App = () => (
    <Admin
        authClient={authClient}
        restClient={jsonServerRestClient(SERVER_BACK + '/api')}
        theme={myTheme}
        title='Info Tech Agency'
    >
        <Resource
            name="candidats"
            list={CandidatList}
            create={CandidatCreate}
            edit={CandidatEdit}
            remove={Delete}
        />
        <Resource
            options={{ label: 'Entreprises' }}
            name="recruts"
            list={EntrepriseList}
            create={EntrepriseCreate}
            edit={EntrepriseEdit}
            remove={Delete}
        />
        <Resource
            name="informations"
            list={InformationList}
            create={InformationCreate}
            edit={InformationEdit}
            remove={Delete}
        />
        <Resource
            name="offres"
            list={OffreList}
            create={OffreCreate}
            edit={OffreEdit}
            remove={Delete}
        />
    </Admin>
);

export default App;