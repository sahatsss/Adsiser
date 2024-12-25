import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../presentations/general-layout/view/RootLayout';
import NotFound from '../presentations/not-found/NotFound';
import CRMContainer from '../../routes/CRM/view/CRMContainer';
import ClientProfileContainer from '../../routes/ClientProfile/view/ClientProfileContainer';

/**
 * INFO: This is where routes and components belongs
 */

export const router = createBrowserRouter([

	// Default routes is not set for the purpose of the test only
    {
        path: '/crm',
        element: <RootLayout />,
        children: [
            {
                path: '', 
                element: <CRMContainer />,
            },
            {
                path: 'client/:id',
                element: <ClientProfileContainer />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
