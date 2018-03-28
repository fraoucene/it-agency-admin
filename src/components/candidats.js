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

export const CandidatList = (props) => (
    <List {...props} pagination={null}>
        <Datagrid>
            <TextField source="id" />
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

export const CandidatCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nom" validate={required} />
            <TextInput source="prenom" validate={required} />
            <TextInput source="poste" validate={required} />
            <TextInput source="phone" />
            <TextInput source="email" validate={required}/>
            <LongTextInput  source="message" />
        </SimpleForm>
    </Create>
);

export const CandidatEdit = (props) => (
    <Edit title={<CandidatTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="nom" validate={required} />
            <TextInput source="prenom" validate={required} />
            <TextInput source="poste" validate={required} />
            <TextInput source="phone" />
            <TextInput source="email" validate={required} />
            <LongTextInput  source="message" />
        </SimpleForm>
    </Edit>
);

const CandidatTitle = ({ record: candidat }) => {
    return <span>{candidat ? candidat.nom + " " + candidat.prenom : ''}</span>;
};