import { useQuery, gql, useMutation } from "@apollo/client";
import { Grid, Box } from "@mui/material";
import CharacterItem from "components/CharacterItem";
import AddDialog from "components/AddDialog";
import { AddDialogProps, CharacterProps } from "types";
import { v4 as uuid } from "uuid";

const GET_USERS = gql`
  query Users {
    users {
      id
      name
      age @client
    }
  }
`;

const ADD_USER = gql`
  mutation Mutation($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
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
 

  //UPDATE CASH
  const [insert_users, states] = useMutation(ADD_USER, {
    update(cache, { data: { insert_users } }) {
      const { users }: any = cache.readQuery({ query: GET_USERS });
      cache.writeQuery({
        query: GET_USERS,
        data: { users: users.concat(insert_users.returning) },
      });
    },
  });

  //REFETCH
  // const [insert_users, states] = useMutation(ADD_USER, {
  //   refetchQueries: [GET_USERS, "Users"],
  // });

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
      optimisticResponse: {
        insert_users: {
          returning: {
            id:'test',
            __typename: "User",
            name,
          },
        },
      },
    });
  };

  const handleUpdate = (data: { id: string; name: string }) => {
    console.log(data);
  };

  console.log(data.users.length, "length");

  return (
    <Box>
      <AddDialog onSubmit={handleSubmit} />
      <Grid container spacing={3}>
        {[...data.users].reverse().map(({ name, id }: CharacterProps) => (
          <Grid key={id} item xl={3} lg={3} md={3} sm={4} xs={12}>
            <CharacterItem name={name} id={id} onUpdate={handleUpdate} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Home;
