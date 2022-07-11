// error
// component for the error route

// import
import Layout from '@/interface/Layout';
import HelloWorld from '@/component/HelloWorld';

// export
export default function Error() {
    return (
        <Layout>
            <HelloWorld />
            <h2>Erreur</h2>
        </Layout>
    );
}