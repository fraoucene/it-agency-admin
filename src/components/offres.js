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

export const OffreList = (props) => (
    <List {...props} pagination={null}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="subtitle" />
            <TextField source="location" />
            <TextField source="resume" />
            <TextField source="detail" />
            <EditButton />
        </Datagrid>
    </List>
);

export const OffreCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required} />
            <TextInput source="subtitle"/>
            <TextInput source="location" validate={required} />
            <LongTextInput source="resume" validate={required}/>
            <LongTextInput source="detail" validate={required}/>
        </SimpleForm>
    </Create>
);

export const OffreEdit = (props) => (
    <Edit title={<OffreTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="title" validate={required} />
            <TextInput source="subtitle"/>
            <TextInput source="location" validate={required} />
            <LongTextInput source="resume" validate={required}/>
            <LongTextInput source="detail" validate={required}/>
        </SimpleForm>
    </Edit>
);


const OffreTitle = ({ record: offre }) => {
    return <span>{offre ? offre.title : ''}</span>;
};