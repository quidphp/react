// home
// component for the home route

// import
import Layout from '@/interface/Layout';
import HelloWorld from '@/component/HelloWorld';

// export
export default function Home() {
    return (
        <Layout>
            <HelloWorld />
            <h2>Home</h2>
        </Layout>
    );
}