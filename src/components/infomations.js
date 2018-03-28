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

export const InformationList = (props) => (
    <List {...props} pagination={null}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nom" />
            <TextField source="prenom" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="message" />
            <EditButton />
        </Datagrid>
    </List>
);

export const InformationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nom" validate={required} />
            <TextInput source="prenom" validate={required} />
            <TextInput source="phone" />
            <TextInput source="email" validate={required}/>
            <LongTextInput  source="message" />
        </SimpleForm>
    </Create>
);

export const InformationEdit = (props) => (
    <Edit title={<InformationTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="nom" validate={required} />
            <TextInput source="prenom" validate={required} />
            <TextInput source="phone" />
            <TextInput source="email" validate={required} />
            <LongTextInput  source="message" />
        </SimpleForm>
    </Edit>
);


const InformationTitle = ({ record: information }) => {
    return <span>{information ? information.nom + " " + information.prenom : ''}</span>;
};