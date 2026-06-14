import { getRequest } from "../../actions/server";

export default async function Page() {
    const res = await getRequest();
    if (!res.success) {
        return <div>Something went wrong</div>;
    }
    return (
        <>
            <div>Message: {res.message}</div>
        </>
    );
}
