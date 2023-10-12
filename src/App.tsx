import "./App.css";
import Layout from "@/components/Layout";
import ForexTable from "@/components/Table";
import { AppProvider } from "@/providers";

function App() {
  return (
    <AppProvider>
      <Layout>
        <ForexTable />
      </Layout>
    </AppProvider>
  );
}

export default App;
