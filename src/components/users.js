// in src/posts.js
import React from 'react';
import {
    Create,
    Datagrid,
    DisabledInput,
    Edit,
    EditButton,
    List,
    required,
    SimpleForm,
    TextField,
    TextInput
} from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props} pagination={null}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="password" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required} />
            <TextInput source="password" validate={required} />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit title={<CandidatTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" validate={required} />
            <TextInput source="password" validate={required} />
        </SimpleForm>
    </Edit>
);

const CandidatTitle = ({ record: candidat }) => {
    return <span>{candidat ? candidat.name : ''}</span>;
};