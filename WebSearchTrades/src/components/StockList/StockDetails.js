import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useEffect } from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Input, TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StockDetails({ stock, setStockSelected }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!stock);
  }, [stock]);

  const handleClose = () => {
    setOpen(false);
    setStockSelected("");
  };

  const ariaLabel = { "aria-label": "description" };

  return (
    stock !== "" && (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{stock?.name}</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                disabled
                label="Ação"
                value={stock?.stock}
                variant="filled"
              />
              <TextField
                disabled
                label="Nome"
                value={stock?.name}
                variant="filled"
              />
              <TextField
                disabled
                label="Preço Ultimo Fechamento"
                value={stock?.getPrice && stock?.getPrice()}
                variant="filled"
              />
              <TextField
                disabled
                label="Variação"
                value={stock?.change}
                variant="filled"
              />
              <TextField
                disabled
                label="Volume"
                value={stock?.volume}
                variant="filled"
              />
              <TextField
                disabled
                label="Total Distribuido"
                value={stock?.market_cap}
                variant="filled"
              />
              <TextField
                disabled
                label="Setor"
                value={stock?.sector}
                variant="filled"
              />
              <TextField
                disabled
                label="Moeda"
                value={stock?.details?.currency}
                variant="filled"
              />

              <TextField
                disabled
                label="Média Móvel de 200 dias"
                value={stock?.details?.twoHundredDayAverage}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação da Média Móvel de 200 dias"
                value={stock?.details?.twoHundredDayAverageChange}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação Percentual da Média Móvel de 200 dias"
                value={stock?.details?.twoHundredDayAverageChangePercent}
                variant="filled"
              />

              <TextField
                disabled
                label="Valor de Mercado (Market Cap)"
                value={stock?.details?.marketCap}
                variant="filled"
              />

              <TextField
                disabled
                label="Nome Abreviado"
                value={stock?.details?.shortName}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação do Mercado Regular"
                value={stock?.details?.regularMarketChange}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação Percentual do Mercado Regular"
                value={stock?.details?.regularMarketChangePercent}
                variant="filled"
              />

              <TextField
                disabled
                label="Horário do Mercado Regular"
                value={stock?.details?.regularMarketTime}
                variant="filled"
              />

              <TextField
                disabled
                label="Preço do Mercado Regular"
                value={stock?.details?.regularMarketPrice}
                variant="filled"
              />

              <TextField
                disabled
                label="Máxima do Dia do Mercado Regular"
                value={stock?.details?.regularMarketDayHigh}
                variant="filled"
              />

              <TextField
                disabled
                label="Faixa do Dia do Mercado Regular"
                value={stock?.details?.regularMarketDayRange}
                variant="filled"
              />

              <TextField
                disabled
                label="Mínima do Dia do Mercado Regular"
                value={stock?.details?.regularMarketDayLow}
                variant="filled"
              />

              <TextField
                disabled
                label="Volume do Mercado Regular"
                value={stock?.details?.regularMarketVolume}
                variant="filled"
              />

              <TextField
                disabled
                label="Fechamento Anterior do Mercado Regular"
                value={stock?.details?.regularMarketPreviousClose}
                variant="filled"
              />

              <TextField
                disabled
                label="Abertura do Mercado Regular"
                value={stock?.details?.regularMarketOpen}
                variant="filled"
              />

              <TextField
                disabled
                label="Volume Médio Diário (3 meses)"
                value={stock?.details?.averageDailyVolume3Month}
                variant="filled"
              />

              <TextField
                disabled
                label="Volume Médio Diário (10 dias)"
                value={stock?.details?.averageDailyVolume10Day}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação desde a Mínima em 52 Semanas"
                value={stock?.details?.fiftyTwoWeekLowChange}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação Percentual desde a Mínima em 52 Semanas"
                value={stock?.details?.fiftyTwoWeekLowChangePercent}
                variant="filled"
              />

              <TextField
                disabled
                label="Faixa de 52 Semanas"
                value={stock?.details?.fiftyTwoWeekRange}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação desde a Máxima em 52 Semanas"
                value={stock?.details?.fiftyTwoWeekHighChange}
                variant="filled"
              />

              <TextField
                disabled
                label="Variação Percentual desde a Máxima em 52 Semanas"
                value={stock?.details?.fiftyTwoWeekHighChangePercent}
                variant="filled"
              />

              <TextField
                disabled
                label="Mínima em 52 Semanas"
                value={stock?.details?.fiftyTwoWeekLow}
                variant="filled"
              />

              <TextField
                disabled
                label="Máxima em 52 Semanas"
                value={stock?.details?.fiftyTwoWeekHigh}
                variant="filled"
              />

              <TextField
                disabled
                label="Símbolo"
                value={stock?.details?.symbol}
                variant="filled"
              />

              <TextField
                disabled
                label="Dado Histórico de Preço"
                value={stock?.details?.historicalDataPrice}
                variant="filled"
              />

              <TextField
                disabled
                label="Periodos Válidos"
                value={stock?.details?.validRanges}
                variant="filled"
              />

              <TextField
                disabled
                label="Intervalos Válidos"
                value={stock?.details?.validIntervals}
                variant="filled"
              />

              <TextField
                disabled
                label="Relação Preço/Lucro (P/L)"
                value={stock?.details?.priceEarnings}
                variant="filled"
              />

              <TextField
                disabled
                label="Lucro por Ação (EPS)"
                value={stock?.details?.earningsPerShare}
                variant="filled"
              />

              <TextField
                disabled
                label="Dados de Dividendos"
                value={stock?.details?.dividendsData}
                variant="filled"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
}
