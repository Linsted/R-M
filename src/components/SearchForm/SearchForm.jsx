import { Formik, Form,Field } from 'formik';

     


export const SearchForm = ({onSubmit}) => {
  
    
    const initialValues = {
        input: "",
    }

    const handleSubmit = (values, {resetForm}) => {
        
        onSubmit(values.input)
        resetForm();
        
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <Form>
                <button type='submit'>ok</button>
                <Field type="text" name='input' /> 
                
            </Form>

        </Formik>
    );
};