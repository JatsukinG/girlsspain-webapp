import type {FC} from "react";
import {ErrorMessage, Field} from "formik";
import {FormErrorRenderer} from "@components";

interface Props {
    label: string
    name: string
    id: string
    type: string
    placeholder?: string
}


const AuthFormInput: FC<Props> = ({label, name, id, type, placeholder}) => {
    return (
        <div className="flex flex-col gap-5">
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <Field
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage name={name} component={FormErrorRenderer}/>
        </div>
    );
};

export default AuthFormInput
