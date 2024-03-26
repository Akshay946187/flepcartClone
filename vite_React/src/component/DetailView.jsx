import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams,  } from "react-router-dom";
import { getProductDetail } from "../redux/actions/productAction";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const DetailView = () => {
  const { product } = useSelector((state) => state.getProductDetail);
  const [loading, setLoading] = useState(true); // State to track loading status
  const dispatch = useDispatch();
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getProductDetail(id)).then(() => setLoading(false)); // Set loading to false after data is fetched
  }, [dispatch, id]);

  const handleAddToCart = () => {
    // Add your logic for adding the product to the cart here
    console.log("Product added to cart:", product);
  };



  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" padding="20px">
      <Box maxWidth="800px" padding="20px" border="1px solid #ddd" borderRadius="5px">
        <Box display="flex" alignItems="center" marginBottom="20px">
          <img src={product.detailUrl} alt="" style={{ width: "200px", marginRight: "20px" }} />
          <Box>
            <Typography variant="h4">{product.title.shortTitle}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{product.title.longTitle}</Typography>
          </Box>
        </Box>
        <Typography variant="body1">{product.description}</Typography>
        <Box marginTop="20px">
          <Typography variant="h6">Price: ${product.price.mrp}</Typography>
          <Typography variant="body2">Discount: {product.price.discount}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginTop="20px">
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        <Link to="/" style={{textDecoration:'none'}}>
        <Button variant="outlined" color="primary" >
            Back to Home Page
          </Button>
        </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailView;




