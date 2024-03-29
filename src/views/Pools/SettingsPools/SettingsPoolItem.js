import React from 'react';
import { AppSwitch } from '@coreui/react';
import {
  Button,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

export default function (props) {
  const {
    pool: {
      enabled,
      donation,
      url,
      username,
      password,
      proxy,
    },
    disabled,
    toggleEnabled,
    onDelete,
    onMoveUp,
    onMoveDown,
    onChange
  } = props;

  return (
    <I18n>
      {({ i18n }) => (
        <Row form>
          <Col md={1}>
            <FormGroup>
              <div className="text-right" style={{ marginTop: '36px' }}>
                <AppSwitch className="" variant="pill" label color="success" checked={enabled} size="lg" onClick={toggleEnabled} />
              </div>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="poolUrl"><Trans>Url</Trans></Label>
              <Input type="text" name="url" id="poolUrl" bsSize="lg" disabled={disabled} onChange={ onChange } value={url} className={ (donation) ? 'donation-color' : '' } />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="poolUsername"><Trans>Username</Trans></Label>
              <Input type="text" name="username" id="poolUsername" bsSize="lg" disabled={disabled} onChange={ onChange } value={username} className={ (donation) ? 'donation-color' : '' } />
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label for="poolUsername"><Trans>Password</Trans></Label>
              <Input type="text" name="password" id="poolPassword" bsSize="lg" disabled={disabled} onChange={ onChange } value={password || ''} className={ (donation) ? 'donation-color' : '' } />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="poolProxy"><Trans>Proxy (Optional)</Trans></Label>
              <Input type="text" name="proxy" id="poolProxy" bsSize="lg" disabled={disabled} onChange={ onChange } value={proxy || ''} className={ (donation) ? 'donation-color' : '' } />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Button size="lg" className="btn-default" style={{ marginTop: '29px', marginRight: '5px' }} onClick={onMoveUp}><i className="fa fa-arrow-up" /></Button>
              <Button size="lg" className="btn-default" style={{ marginTop: '29px', marginRight: '5px' }} onClick={onMoveDown}><i className="fa fa-arrow-down" /></Button>
              <Button size="lg" className="btn-danger" style={{ marginTop: '29px' }} disabled={donation ? true : false} onClick={onDelete}><i className="fa fa-times" /></Button>
            </FormGroup>
          </Col>
        </Row>
      )}
    </I18n>
  );
}
