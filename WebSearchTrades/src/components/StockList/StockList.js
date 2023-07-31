import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import StockService from "@/src/services/StockService";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import StockDetails from "./StockDetails";

export default function StockList() {
  const [stocks, setStocks] = useState([]);
  const [stocksSelected, setStocksSelected] = useState([]);
  const [showDetais, setShowDetails] = useState(false);
  const [stockSelected, setStockSelected] = useState("");
  const user = useSelector((state) => state?.user);
  const stockService = new StockService(user);

  useEffect(() => {
    stockService.getStocks().then(setStocks);
  }, []);

  useEffect(() => {
    setStocksSelected(stocks);
  }, [stocks]);

  const filterStock = (event) => {
    const filter = event.target.value;

    if (filter === "") setStocksSelected(stocks);

    const stocksIncludes = stocks.filter(
      (stock) =>
        stock.name?.toLowerCase().includes(filter.toLowerCase()) ||
        stock.stock?.toLowerCase().includes(filter.toLowerCase()) ||
        stock.market_cap?.includes(filter)
    );

    setStocksSelected(stocksIncludes);
  };

  const showDetails = (event) => {
    const id = event.target.id;
    const selected = stocks.find((stock) => stock.stock === id);
    stockService.getStocksByName(id).then((res) => {
      selected.details = res;
      setStockSelected(selected);
      setShowDetails(true);
    });
  };

  return (
    <>
      {showDetais && (
        <StockDetails
          stock={stockSelected}
          setStockSelected={setStockSelected}
        />
      )}
      <main>
        {stocks.length && (
          <TextField
            id="outlined-basic"
            label="Pesquisa"
            variant="outlined"
            style={{ marginTop: "3%", marginLeft: "1.5%" }}
            onKeyUp={filterStock}
          />
        )}
        <Container sx={{ py: 12 }} maxWidth="2" style={{ marginTop: "-5%" }}>
          <Grid container spacing={4}>
            {stocksSelected?.map((stock) => (
              <Grid item key={stock.stock} xs={12} sm={6} md={2}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "85%"
                    }}
                    image={stock.logo}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {stock.name}
                    </Typography>
                    <Typography>{stock.stock}</Typography>
                    <Typography>{stock.getPrice()}</Typography>
                    <Typography>{stock.sector}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={showDetails} id={stock.stock}>
                      Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}
