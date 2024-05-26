import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookContext } from "../context/BookProvider";

const ReadSection = () => {
  const [bookId] = useContext(BookContext);
  const [getBook, setGetBook] = useState({
    bookName: "",
    category: "",
    price: null,
    title: "",
    image: "",
  });

  useEffect(() => {
    if (bookId.id) {
      localStorage.setItem("BookId", bookId.id);
    }
  }, [bookId.id]);

  useEffect(() => {
    const getBookById = async () => {
      try {
        const desiredBook = await axios.get(
          `http://localhost:3000/book/get/${
            bookId.id ? bookId.id : localStorage.getItem("BookId")
          }`
        );
        const finalBook = desiredBook.data.book;
        setGetBook({
          ...getBook,
          bookName: finalBook.bookname,
          category: finalBook.category,
          price: finalBook.price,
          title: finalBook.title,
          image: finalBook.image,
        });
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getBookById();
    window.scrollTo(0, 0);
  }, [bookId.id]);

  return (
    <>
      <div className="min-h-screen mt-[80px] ">
        <div className="flex  max-w-screen-2xl container mx-auto md:px-24  px-4 flex-col md:flex-row my-10">
          <div className="px-2 py-5 w-[90vw] md:w-[30vw] border md:mx-32 shadow-xl">
            <img
              className="md:h-[550px] md:w-[30vw] object-cover h-[500px]"
              src={getBook.image}
            />
          </div>
          <div className="md:mt-48">
            <h1 className="font-bold text-2xl md:text-4xl py-6">
              <span className="text-pink-500">Book:</span> {getBook.bookName}
            </h1>
            <p className="text-gray-500">
              <span className="text-pink-500">Title:</span> {getBook.title}
            </p>
            <p className="pt-2">Price: {getBook.price}</p>
            <p className="">Category: {getBook.category}</p>
          </div>
        </div>
        <div className="md:px-20 px-4 ">
          <h1 className="text-2xl mb-5">
            Start <span className="text-pink-500">Reading</span> here:
          </h1>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            possimus odit deserunt tempore iste laborum aliquam repellat,
            asperiores ducimus repudiandae totam nihil molestias incidunt
            maiores, accusamus quidem culpa exercitationem quod illum.
            Laboriosam distinctio qui a voluptates accusamus voluptatem minima
            doloribus tempore accusantium. Facilis omnis deleniti voluptates
            quaerat non. Autem, blanditiis voluptatibus nobis, voluptates illo
            corrupti ad natus velit atque consequuntur quam nulla nisi.
            Excepturi blanditiis nesciunt, sapiente unde consectetur at? Quia
            nemo vel deserunt sint consequatur eos nulla doloremque veniam,
            natus mollitia. Perspiciatis accusantium quae, consectetur laborum
            totam, consequuntur error id qui repudiandae maiores dolorum
            consequatur. Pariatur officia fuga id rerum repellendus laborum
            harum officiis magni nemo quam. Repudiandae culpa illo velit ea ab
            fugiat dolor aperiam minima? Dolore repellendus provident vel quis
            culpa dolorum tempora exercitationem iste nihil corrupti,
            consequatur quod saepe atque cumque animi? Voluptatibus dolorem non
            nam. Provident aliquam veritatis numquam reprehenderit voluptate
            velit similique illo asperiores ratione quaerat, omnis perferendis
            inventore! Illum cupiditate, autem molestias culpa iusto, dolore
            accusamus quaerat doloribus, numquam reiciendis sit quo error aut
            eum nisi. Cumque architecto unde quia! Ipsum quasi molestias
            asperiores officia culpa natus veritatis libero, deleniti ea
            doloribus dolor aut earum at consequatur nihil laboriosam adipisci
            sapiente totam eius minus iure quidem nam enim. Quaerat magnam
            voluptatum culpa cumque dolorum tempora reiciendis molestiae
            assumenda velit impedit at placeat, vitae est ad? Non, ex. Ad
            tempore ducimus amet, corporis quidem non placeat, ratione, incidunt
            a dignissimos aliquam similique sequi voluptate. Debitis amet error
            eos fugit illum sapiente, officiis optio dignissimos!
          </p>
        </div>
      </div>
    </>
  );
};

export default ReadSection;
