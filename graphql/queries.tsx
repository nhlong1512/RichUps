// Single component
import { gql, useQuery } from "@apollo/client";

export function MyComponent() {
  const { loading, error, data } = useQuery(
    gql`
      query getTrackingItems {
        getTrackingItemById(id: "1ZS31F5V0397294994") {
          customer_id
          customer {
            email
            name
          }
        }
      }
    `,
    {
      variables: {},
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return <p>{data}</p>;
}
