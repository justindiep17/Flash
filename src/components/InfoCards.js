import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { decks, users } from "../config/firebase/firebaseSetup";
import { FieldPath, documentId, getDoc, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Grid, Typography, Badge, Modal, Button } from "@mui/material";
import EditDeckForm from "../components/EditDeckForm";
import { getDeckRef } from "../config/decks";
import Loading from "../components/Loading";
import PublicFlashCard from "../components/PublicFlashCard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import { useAuthStatus } from "../auth";
import { deleteDeck } from "../config/decks";
import Navbar from "../components/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";

function InfoCards({ icon, text }) {
  return <Grid item></Grid>;
}
