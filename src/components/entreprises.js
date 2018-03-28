// in src/posts.js
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    TextInput,
    LongTextInput,
    EditButton,
    Create,
    Edit,
    DisabledInput,
    SimpleForm,
    required
} from 'admin-on-rest';

export const EntrepriseList = (props) => (
    <List {...props} pagination={null}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="societe" />
            <TextField source="nom" />
            <TextField source="prenom" />
            <TextField source="poste" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="message" />
            <EditButton />
        </Datagrid>
    </List>
);

export const EntrepriseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="societe" validate={required} />
            <TextInput source="nom" validate={required} />
            <TextInput source="prenom" validate={required} />
            <TextInput source="poste" validate={required} />
            <TextInput source="phone" />
            <TextInput source="email" validate={required}/>
            <LongTextInput  source="message" />
        </SimpleForm>
    </Create>
);

export const EntrepriseEdit = (props) => (
    <Edit title={<EntrepriseTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="societe" validate={required} />
            <TextInput source="nom" validate={required} />
            <TextInput source="prenom" validate={required} />
            <TextInput source="poste" validate={required} />
            <TextInput source="phone" />
            <TextInput source="email" validate={required} />
            <LongTextInput  source="message" />
        </SimpleForm>
    </Edit>
);


const EntrepriseTitle = ({ record: entreprise }) => {
    return <span>{entreprise ? entreprise.societe + " : " + entreprise.nom + " " + entreprise.prenom : ''}</span>;
};