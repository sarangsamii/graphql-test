import { useQuery, gql } from "@apollo/client";
import { Grid } from "@mui/material";
import CharacterItem from "components/CharacterItem";
import { CharacterProps } from "types";

const EXCHANGE_RATES = gql`
  query AllQueries($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        gender
        image
      }
    }
  }
`;
const Home: React.FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <Grid container spacing={3}>
      {data.characters.results.map(
        ({ name, gender, status, image }: CharacterProps) => (
          <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
            <CharacterItem
              name={name}
              gender={gender}
              status={status}
              image={image}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};
export default Home;
