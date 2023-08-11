import { styled } from 'styled-components';

export const St = {
  WriteContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
  `,

  WriteCancelButtonBox: styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
  `,

  WriteCancelButton: styled.button`
    font-size: 16px;
    color: #000000;
    text-decoration: underline;
    /* background-color: #4b4b4b; */
    background-color: transparent;
    border: none;
    border-radius: 15px;
    padding: 7px 35px;
    cursor: pointer;

    &:hover {
      /* background-color: #bb3535; */
      font-weight: 600;
      /* font-style: italic; */
    }
  `,

  WriteAddButtonBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  WriteAddButton: styled.button`
    font-size: 16px;
    color: #ffffff;
    background-color: #e24c4b;
    border: none;
    border-radius: 15px;
    margin: 50px 0;
    padding: 7px 35px;
    cursor: pointer;

    &:hover {
      background-color: #bb3535;
    }
  `,

  WriteBox: styled.div`
    display: inline-flex;
    margin: 15px 0;
  `,

  WriteCategory: styled.select`
    font-size: 14px;
    background-color: #f7f9fc;
    border: 1px solid #dbdde6;
    border-radius: 5px;
    padding: 10px;
    margin-right: 10px;
  `,

  WriteTitle: styled.input`
    width: 990px;
    font-size: 18px;
    background-color: #f7f9fc;
    border: 1px solid #dbdde6;
    border-radius: 5px;
    padding: 7px;
  `
};
