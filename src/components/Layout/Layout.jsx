import { Box } from 'components/Box';

export const Layout = ({ children }) => {
  return (
    <Box mx="12px">
      <Box
        as="main"
        display="grid"
        gridGap="16px"
        width={[1, 1 / 2, 1 / 3]}
        m="16px auto"
        p="16px"
        borderRadius="3px"
        border="0.5px solid #a3a3a3"
        bg="#f5f5f5"
        boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);"
      >
        <Box mx="auto">
          <h1>Scheduler</h1>
        </Box>
        {children}
      </Box>
    </Box>
  );
};
