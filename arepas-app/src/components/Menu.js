import React from 'react';
import Table from 'react-bootstrap/Table';
import './Menu.css'
export const Menu = () => (
    <Table responsive className='menu'>3
      <thead>
        <tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <th key={index}>Titulo arepa</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from({ length: 4}).map((_, index) => (
            <td key={index}>arepa {index}</td>
          ))}
        </tr>
      </tbody>
      <thead>
        <tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <th key={index}>Titulo arepa</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from({ length: 4}).map((_, index) => (
            <td key={index}>arepa {index}</td>
          ))}
        </tr>
      </tbody>
      <thead>
        <tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <th key={index}>Titulo arepa</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from({ length: 4}).map((_, index) => (
            <td key={index}>arepa {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
)