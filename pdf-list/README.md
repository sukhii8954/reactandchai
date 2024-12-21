# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- instructions or details about how to run this project  -->

1) unzip the file on your machine

2) open vs code or your terminal and navigate to the directory of project.

   cd pdf-list

3) install dependencies 
    npm install

4) run the project/application
    npm run dev 
(probably app will start and provide a URL e.g. http://localhost:5173/ which you can view in your browser by copy paste or alt+click)



<!-- Instructiions How to Use this :- -->
1) PDF List View:

When the app starts, you will be presented with a list of PDFs in the form of cards.
Each card shows:
An image inserted instead of the real image on the thumbnail of the PDF.
The title of the PDF.
The author's name.
Search PDFs:

The list shown here is generated if you enter a query into the search bar at the top of the page, and then click on ‘PDF’. When you are typing, the list will reduce to show whichever matches your typing.

2) View PDF Details:

To get more information about the PDF in focus, click on any of the cards presented above.
The detailed view includes:
The PDF's title.
The author's name.
An EPub of the PDF that can be sort of previewed with an embedded previewer.
Return to the List:

At the above of PDF use the “Back to List” link and get back to the list of PDFs.