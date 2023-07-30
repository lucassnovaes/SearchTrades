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

export default function StockList() {
  const [stocks, setStocks] = useState([]);
  const user = useSelector((state) => state?.user);

  useEffect(() => {
    const stockService = new StockService(user);
    const stockList = stockService.getStocks();
    setStocks(stockList);
  }, [user]);

  return (
    <>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {stocks.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "80%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "30%"
                    }}
                    image="https://img.freepik.com/premium-photo/stock-market-bull-market-trading-up-trend-graph-green-background-rising-price-generative-ai_1423-7209.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {stocks.name}
                    </Typography>
                    <Typography>{stocks.code}</Typography>
                    <Typography>{stocks.price}</Typography>
                    <Typography>{stocks.variation}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Comprar</Button>
                    <Button size="small">Detalhes</Button>
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
