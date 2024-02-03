import React from 'react'
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import {ErrorPage} from "./src/components/ErrorPage";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe("ErrorPage component", () => {
    it("renders correct ", () => {
      render( <BrowserRouter>
      <ErrorPage />
      </BrowserRouter>
      
      );
      const link = screen.getByText("Oh no, this route doesn't exist!");

        expect(link).toBeInTheDocument();
    });

    it("fake test ", () => {
      expect(5).toBe(5)
  })
  }


  )
  




// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });