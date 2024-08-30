import { QueryClient, QueryClientProvider } from 'react-query';
import Page from './components/Page';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Page />
        </QueryClientProvider>
    )
}
