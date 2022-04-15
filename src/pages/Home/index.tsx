import { useQuery, gql, useMutation } from "@apollo/client";
import { Grid, Box } from "@mui/material";
import CharacterItem from "components/CharacterItem";
import AddDialog from "components/AddDialog";
import { AddDialogProps, CharacterProps } from "types";

const GET_USERS = gql`
  query Users {
    users {
      id
      name
    }
  }
`;

const ADD_USER = gql`
  mutation Mutation($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        name
      }
    }
  }
`;

const UPDATE_USER = gql`
mutation Mutation($where: users_bool_exp!) {
  update_users(where: $where) {
    returning {
      name
      id
    }
  }
}
`;
const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [insert_users, states] = useMutation(ADD_USER, {
    refetchQueries: [GET_USERS, "Users"],
  });

  if (loading) return <p>Loading...</p>;
  if (error || states.error) return <p>Error :(</p>;

  const handleSubmit = (name: string): void => {
    insert_users({
      variables: {
        objects: [
          {
            name,
          },
        ],
      },
    });
  };

  const handleUpdate = (data:{id:string, name:string}) =>{
    console.log(data)

  }

  return (
    <Box>
      <AddDialog onSubmit={handleSubmit} />
      <Grid container spacing={3}>
        {data.users.map(({ name,id }: CharacterProps) => (
          <Grid key={id} item xl={3} lg={3} md={3} sm={4} xs={12}>
            <CharacterItem name={name} id={id} onUpdate={handleUpdate}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Home;
