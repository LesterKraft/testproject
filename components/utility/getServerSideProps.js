import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export async function getServerSideProps(context, collection) {
  const db = getFirestore();
  const docRef = doc(db, "question", context.query.questionId);
  const docSnap = await getDoc(docRef);
  let questionData;
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    questionData = {
      ...docSnap.data(),
      id: docSnap.id,
    };
    return {
      props: { question: questionData, questionId: context.query.questionId },
    };
  } else {
    return { props: { question: null, questionId: context.query.questionId } };
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// export async function getServersideProps(context) {
//     const contentDataSnapshot = await getContentData(context.query.contentId)
//     return {
//     props: {
//     contentData: contentDataSnapshot.data()
//     }
//     }
