import React, { Component } from "react";
import { connect } from "react-redux";
import { bindAcionCreators } from "redux";

import ContactModal from "../components/ContactModal";
import Dimmed from "../components/Dimmed";

import * as modalActions from "../modules/modal";
import * as contactActions from "../modules/contacts";

import shortid from "shortid";
