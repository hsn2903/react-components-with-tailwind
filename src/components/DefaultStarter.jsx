/* eslint-disable @next/next/no-img-element */
import React from "react";

const DefaultStarter = () => {
  return (
    <div>
      <h1>hello world</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        dolorem a ullam repudiandae! Voluptates dolorum ducimus, ipsa natus vel
        ratione.
      </p>
      <h2>hello world</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        dolorem a ullam repudiandae! Voluptates dolorum ducimus, ipsa natus vel
        ratione.
      </p>
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
      <h4>hello world</h4>
      <h5>hello world</h5>
      <a href="#">link example</a>
      <ul>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
      </ul>

      <img src="./computer.jpeg" alt="computer" class="img" />
      <br />
      <button class="btn" type="button">
        regular button
      </button>
      <button class="btn btn-hipster" type="button">
        hipster button
      </button>
      <br />
      <br />
      <br />

      <div class="alert alert-danger">hello from danger</div>
      <div class="alert alert-success">hello from success</div>
      <form class="form">
        <h4>contact form</h4>
        <div class="form-row">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="hello there"
            id="name"
            class="form-input"
          />
        </div>
        <div class="form-row">
          <label for="number" class="form-label">
            Number
          </label>
          <input type="number" id="number" class="form-input" />
        </div>
        <div class="form-row">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" id="email" class="form-input" />
          <small class="form-alert">please provide value</small>
        </div>
        <div class="form-row">
          <label for="textarea" class="form-label">
            Textarea
          </label>
          <textarea class="form-textarea">Default Value</textarea>
        </div>
        <button type="submit" class="btn btn-block">
          submit
        </button>
      </form>
      <div class="loading"></div>
      <br />
      <br />
      <div class="title">
        <h2>section title</h2>
        <div class="title-underline"></div>
      </div>
    </div>
  );
};

export default DefaultStarter;
