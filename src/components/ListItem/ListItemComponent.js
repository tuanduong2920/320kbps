import { Box, Grid, makeStyles, Zoom } from "@material-ui/core";
import React, { useState } from "react";
import Item from "./Item/Item";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    width: `100%`,
    paddingTop: 50,
    paddingBottom: 50,
    "& ul": {
      justifyContent: "center",
    },
  },
});

const ListItemComponent = ({ visibility, list }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  //pagination
  const itemInOnePage = 12;
  const pageCount = Math.ceil(list.length / itemInOnePage);

  const start = (currentPage - 1) * itemInOnePage;
  const end = start + itemInOnePage;

  const listPagination = list.slice(start, end);

  const paginationHandler = (e, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {visibility && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: `80%` }}>
            {listPagination.length > 0 ? (
              <>
                <Zoom in={true}>
                  <Grid container spacing={2}>
                    {listPagination.map((i) => (
                      <Item key={i.id} {...i}></Item>
                    ))}
                  </Grid>
                </Zoom>

                <Pagination
                  className={classes.root}
                  page={currentPage}
                  onChange={paginationHandler}
                  count={pageCount}
                  color="secondary"
                />
              </>
            ) : (
              <Box margin={10} component="h4">
                No Result
              </Box>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ListItemComponent;
