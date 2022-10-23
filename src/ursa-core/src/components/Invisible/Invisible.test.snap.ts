// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`components/Invisible <Invisible /> Run Snapshot Test 1`] = `
.emotion-1 {
  visibility: hidden!important;
  position: absolute!important;
  top: 0!important;
  width: 1px!important;
  height: 1px!important;
  margin: 0!important;
  padding: 0!important;
  overflow: hidden!important;
  border: 0!important;
  outline: 0!important;
  white-space: nowrap!important;
  -webkit-clip-path: inset(50%)!important;
  clip-path: inset(50%)!important;
}

.emotion-2 {
  color: rgba(0, 0, 0, 1);
}

.emotion-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 0.625rem;
}

.emotion-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  width: 100%;
}

.emotion-4 .Ursa-LabelContainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.emotion-4 .Ursa-LabelContainer>.Ursa-TextfieldLabel {
  font-size: 0.9375rem;
}

.emotion-4 .Ursa-Textfield {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.emotion-4 .Ursa-Textfield>.Ursa-TextfieldPrefix {
  position: absolute;
  left: 0.5rem;
  color: rgba(109, 113, 117, 1);
}

.emotion-4 .Ursa-Textfield>.Ursa-Input {
  width: 100%;
  min-height: inherit;
  padding: 0.625rem;
  padding-left: undefined;
  border: 1px solid rgba(203, 213, 225, 1);
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9375rem;
  text-align: left;
  text-transform: none;
  -webkit-transition: outline 0.05s ease-in-out;
  transition: outline 0.05s ease-in-out;
  resize: none;
}

.emotion-4 .Ursa-Textfield>.Ursa-Input:focus {
  outline: 2px solid blue;
  outline-offset: 0.1rem;
}

.emotion-4 .Ursa-Textfield>.Ursa-PasswordShowHide,
.emotion-4 .Ursa-Textfield .Ursa-TextClearButton {
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
}

.emotion-4 .Ursa-TextfieldErrors {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

<form
  className=Ursa-Form emotion-0
  data-testid=test-form
  id="Ursa-Form-0"
  onSubmit={[Function]}
>
  <span
    className=Ursa-Invisible emotion-1
  >
    <h2
      className=Ursa-Heading emotion-2
      id="Ursa-Heading-1"
    >
      This Title is Hidden
    </h2>
  </span>
  <div
    className=Ursa-FormLayout emotion-3
  >
    <div
      className=Ursa-FormLayoutGroupItem
    >
      <div
        className=Ursa-TextfieldContainer emotion-4
      >
        <div
          className=Ursa-LabelContainer
        >
          <label
            className=Ursa-TextfieldLabel 
            htmlFor="Ursa-Textfield-2"
            id="Ursa-TextfieldLabel-3"
          >
            Email
          </label>
        </div>
        <div
          className=Ursa-Textfield
          data-field=email
        >
          <input
            aria-labelledby="Ursa-TextfieldLabel-4"
            className=Ursa-Input
            id="Ursa-Textfield-5"
            name=email
            onBlur={[Function]}
            onFocus={[Function]}
            placeholder=Email
            type=text
          />
        </div>
      </div>
    </div>
  </div>
</form>
`;
