import { Grid, Text, GridItem } from '@chakra-ui/react';

export function App() {
  return (
    <>
      <Grid templateColumns={'1fr 453px'} gap={120}>
        <GridItem>
          <Text>Lado 1</Text>
        </GridItem>

        <GridItem>
          <Text>Lado 2</Text>
        </GridItem>
      </Grid>
    </>
  );
}
