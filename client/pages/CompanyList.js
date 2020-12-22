import Head from 'next/head'

import React, {Fragment} from 'react';

// Company Components
import ListCompany from '../components/company/ListCompany';

export default function Home() {
  return (
    <Fragment>
      <div>
      <header>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </header>
      <div class="jumbotron jumbotron-fluid">
        <h1 class="text-center">Clockin Project</h1>
        <h3 class="text-center">Author: Anton H. Heimdal</h3>
      </div>
        <ListCompany/>
      </div>
      <div class="d-flex flex-column">
        <button 
          class="btn btn-primary m-3 p-2"
          onClick={() => {
                window.location.href = '/';
            }}
          ><h1>Back</h1></button>
      </div>
    </Fragment>
  )
}
