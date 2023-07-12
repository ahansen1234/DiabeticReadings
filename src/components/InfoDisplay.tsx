import "../App.css";

export const InfoDisplay = () => {
  return (
    <div className="mainScreen">
      <div className="rowLeft">
        <h1 className="titleText">Info on Type 1 Diabetes</h1>
        <h3 className="titleText"> Built using React, Typescript, & ChartJs</h3>
        I have been a Type 1 Diabetic since three years old, and wanted to
        create a platform to educate others on the disease. I also wanted to try
        my hand at creating a tool to view blood sugar readings and help a user
        to control their levels better
      </div>
      <div className="rowRight">
        <h1 className="titleText">Causes</h1>
        Type 1 diabetes occurs when your immune system, the body's system for
        fighting infection, attacks and destroys the insulin-producing beta
        cells of the pancreas. This results in your body not being able to
        regulate its blood glucose levels. Scientists believe type 1 diabetes is
        caused by genes and environmental factors, such as viruses, that might
        trigger the disease.
      </div>
      <div className="rowLeft">
        <h1 className="titleText"> Treatement </h1>
        If you have type 1 diabetes, you'll need to take insulin shots (or wear
        an insulin pump) every day. Insulin is needed to manage your blood sugar
        levels and give your body energy. You can't take insulin as a pill
        because the acid in your stomach would destroy it before it could get
        into your bloodstream.
      </div>
      <div className="rowRight">
        <h1 className="titleText"> Responsibilities</h1>
        Diabetics must be constantly aware of their blood glucose levels. To
        manage this, diabetics must check their blood sugar levels often using
        finger pokes to draw blood, or by wearing a Continuous Glucose Monitor
        (CGM). Once a blood glucose reading is performed, diabetics must correct
        by either ingesting more glucose, or administering more insulin. Every
        time a diabetic eats, he/she needs to count the carbohydrates being
        injested, account for reasons said carbohydrates may be absorbed into
        the bloodstream at different rates, and administer insulin in quantity
        and release time based on these understandings.
      </div>
      <div className="rowLeft">
        <h1 className="titleText">Persol Effects</h1>
        Being a Type 1 Diabetic has shaped me into the man I am today. The
        immense responsibility of constantly monitoring what I eat, when I eat,
        how much insulin I deliver, and how my blood glucose levels react has
        instilled a deep sense of accountability into my life. I have become
        accustomed to making high stakes decisions constantly, molding me into
        an individual who works well under pressure and keeps his cool.
      </div>
    </div>
  );
};

export default InfoDisplay;
